export function toTwitterShare() {
  const url = 'http://airdrop.saas3.io/';
  const content = 'I just launched an #ORACLE and got 360 SAAS tokens through this SaaS3 #airdrop! This is so C😎😎L! You can launch one too by clicking this link in your PC';
  // open to twitter share
  window.open(
    `http://twitter.com/share?url=${
      encodeURIComponent(url)
    }&text=${
      encodeURIComponent(content)
    }&display=popup&ref=plugin&src=share_button`,
  );
}
