export const useUtilities = () => {
  const detectMobile = (navigator: Navigator) => {
    return (
      navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/Windows Phone/i)
    );
  };

  const extractString = (str: string) => str.replace(/[^A-Z0-9]+/gi, '-');

  return { detectMobile, extractString };
};
