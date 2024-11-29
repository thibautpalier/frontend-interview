import { useCallback, useState, useEffect } from "react";

import { SendOutlined, LoadingOutlined } from "@ant-design/icons";

import { getSharingToken } from "@/api/token";
import { Button } from "@/lib/Button";

import styles from "./styles.module.css";

interface ShareButtonProps {
  questionId: string;
}

const ShareQuestionButton = ({ questionId }: ShareButtonProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const copyQuestionLinkToClipboard = useCallback(async () => {
    setLoading(true);
    const sharingToken = await getSharingToken();

    try {
      const url = new URL(`/question/${questionId}`, window.location.origin);
      url.searchParams.set("token", sharingToken);
      const urlString = url.toString();

      // Note: navigator.clipboard may not work within
      // an unsecure context (https) and without proper permissions
      // A fallback can be created has a workaround
      await navigator.clipboard.writeText(urlString);

      setSuccess(true);
    } catch (e) {
      setError("Error copying to clipboard");
    } finally {
      setLoading(false);
    }
  }, [questionId]);

  useEffect(() => {
    if (success) {
      setTimeout(() => setSuccess(false), 2000);
    }

    if (error) {
      setTimeout(() => setError(null), 2000);
    }
  }, [success, error]);

  return (
    <div className={styles.root}>
      <Button
        className={styles.button}
        disabled={loading}
        onClick={copyQuestionLinkToClipboard}
      >
        <div className={styles.buttonLabel}>
          {loading ? (
            <>
              <LoadingOutlined /> Generating link
            </>
          ) : (
            <>
              <SendOutlined /> Share
            </>
          )}
        </div>
      </Button>
      <div className="subtitles">
        {error && <span className={styles.error}>{error}</span>}
        {success && <span className={styles.success}>Share link copied</span>}
      </div>
    </div>
  );
};

export default ShareQuestionButton;
