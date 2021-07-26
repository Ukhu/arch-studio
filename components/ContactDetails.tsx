import Button from "./Button";

import style from "../styles/comps/ContactDetails.module.scss";

const ContactDetails = () => {
  return (
    <section className={style.contact_details}>
      <div className={style.divider} />
      <div className={style.contact_details_content}>
        <h2 className={style.contact_details_heading}>
          <span>Contact</span>
          <span>Details</span>
        </h2>
        <div className={style.contact_details_section_group}>
          <div className={style.contact_details_section}>
            <h3>Main Office</h3>
            <div className={style.contact_details_section_content}>
              <div>
                <p>Mail: archone@mail.com</p>
                <p>Address: 1892 Chenoweth Drive TN</p>
                <p>Phone: 123-456-3451</p>
              </div>

              <Button
                className={style.contact_details_section_btn}
                variant="normal"
              >
                View on Map
              </Button>
            </div>
          </div>
          <div className={style.contact_details_section}>
            <h3>Office II</h3>
            <div className={style.contact_details_section_content}>
              <div>
                <p>Mail: archtwo@mail.com</p>
                <p>Address: 3399 Wines Lane TX</p>
                <p>Phone: 832-123-4321</p>
              </div>

              <Button
                className={style.contact_details_section_btn}
                variant="normal"
              >
                View on Map
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
