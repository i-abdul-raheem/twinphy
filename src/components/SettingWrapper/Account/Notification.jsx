import { useState } from "react";

export const Notification = () => {
  const [checked, isChecked] = useState(false);
  return (
    <>
      <div className="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop2">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            Notification
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div className="offcanvas-body">
          <div className="toggle-list">
            <h6 className="mb-0">Push notification</h6>
            <div className="no-className">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckChecked"
                checked={checked}
                onClick={() => isChecked(!checked)}
              />
              <label
                className="form-check-label"
                for="flexSwitchCheckChecked"
              ></label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
