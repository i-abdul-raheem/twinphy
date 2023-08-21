export const Media = ({ src }) => {
  const video = [
    "mp4",
    "avi",
    "mov",
    "mkv",
    "wmv",
    "flv",
    "webm",
    "mpeg",
    "mpg",
    "3gp",
    "m4v",
    "ogg",
  ];
  return (
    <>
      {src && video.includes(
        src.toString().split(".")[src.toString().split(".").length - 1]
      ) ? (
        <video
          src={src}
          controls
          style={{ width: "80%", borderRadius: "20px" }}
        />
      ) : (
        <img src={src} alt="/" />
      )}
    </>
  );
};
