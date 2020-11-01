import React from "react";
import "./Descrip.css";
import PhoneIcon from "@material-ui/icons/Phone";
function Descrip() {
  return (
    <div className="descrip">
      <div className="descrip_container">
        <div className="descrip_img">
          <img
            className="image"
            src="https://apollo-singapore.akamaized.net/v1/files/f5wz0xmr42eo3-PK/image;s=1080x1080"
          />
        </div>
        <div className="descrip_info">
          <h3>Info About Product</h3>
          <p>Rs 8,000,000 - 7 years</p>
          <p>
            Ab Honda BR-V I-VTEC S hasil kry boht e asan iqsat me 20% py 10/10
          </p>
          <br />
          <p className="descrip_infoLeft">
            Faisalabad, Punjab, Pakistan
            <span className="descrip_infoRight"> Oct 06</span>
          </p>
        </div>
        <div className="descrip_info">
          <h3>Sellers Info</h3>
          <p>Bilal Ahmed</p>
          <p className="descrip_infoLeft">Member Since 2020</p>
          <br />
          <p>
            <PhoneIcon className="decrip_imgPhone" />
            03358878784
          </p>
          <button>Proceed to Call</button>
        </div>
        <div className="descrip_infoDes">
          <h3>Description</h3>
          <br />
          <p>
            Ab Maalik baniain apni Honda BR-V I-VTEC S k asaan mahaana iqsaat
            mein 1 to 7 years ki asan iqsat per 20% down payment ada karain Koi
            hidden or processing charges ni hain. soud say paak 3% mark up on
            remaining amount annually islamic financing system Flexible and
            Non-Flexible installments System For further details call or visit
            our office. Regards CRO Mr Sajid
          </p>
          
        </div>
      </div>
    </div>
  );
}

export default Descrip;
