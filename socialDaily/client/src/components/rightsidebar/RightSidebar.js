import React from "react";

export default function RightSidebar() {
  return (
    <div className="col-lg-3">
      <aside className="sidebar static">
        <div className="widget friend-list stick-widget">
          <h4 className="widget-title">Friends</h4>
          <div id="searchDir"></div>
          <ul id="people-list" className="friendz-list">
            <li>
              <figure>
                <img src="images/resources/friend-avatar.jpg" alt="" />
                <span className="status f-online"></span>
              </figure>
              <div className="friendz-meta">
                <a href="time-line.html">bucky barnes</a>
                <i>
                  <a
                    href="https://wpkixx.com/cdn-cgi/l/email-protection"
                    className="__cf_email__"
                    data-cfemail="a0d7c9ced4c5d2d3cfccc4c5d2e0c7cdc1c9cc8ec3cfcd"
                  >
                    [email&#160;protected]
                  </a>
                </i>
              </div>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
