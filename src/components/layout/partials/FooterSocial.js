import React from 'react';
import classNames from 'classnames';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';




const FooterSocial = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-social',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <a href="https://facebook.com/">

            <AiFillFacebook />

          </a>
        </li>
        <li>
          <a href="https://wa.me/message/NQERYR7YT5XRB1">

            <AiOutlineWhatsApp />
          </a>
        </li>
        <li>
          <a href="https://instagram.com/pranav_kunjir96?utm_medium=copy_link">

            <AiFillInstagram />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default FooterSocial;