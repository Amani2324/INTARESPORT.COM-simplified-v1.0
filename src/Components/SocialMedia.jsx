import React from "react";


const SocialMedia = () => (
  <SocialMedia>
    {/* Facebook */}
    <SocialMedia.Account
      name="Facebook"
      icon="https://facebook.com/img/f_logo.png"
      url="https://facebook.com/"
    />
    {/* Twitter */}
    <SocialMedia.Account
      name="Twitter"
      icon="https://twemoji.maxcdn.com/svg/1f60e.svg"
      url="https://twitter.com/"
    />
    {/* Instagram */}
    <SocialMedia.Account
      name="Instagram"
      icon="https://instagram.com/static/images/ico/instagram.svg"
      url="https://instagram.com/"
    />
    {/* YouTube */}
    <SocialMedia.Account
      name="YouTube"
      icon="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/YouTube_icon.svg/300px-YouTube_icon.svg.png"
      url="https://youtube.com/"
    />
  </SocialMedia>
);

export default SocialMedia;
