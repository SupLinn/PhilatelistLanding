// MenuComponent.jsx
import React from 'react';
import './MenuComponent.css'; // Optional, for custom styling

const MenuComponent = () => {
  return (
    <div className="whb-row whb-header-bottom whb-sticky-row whb-with-bg whb-without-border whb-color-light whb-hidden-mobile whb-flex-flex-middle">
      <div className="container">
        <div className="whb-flex-row whb-header-bottom-inner">
          <div className="whb-column whb-col-left whb-visible-lg">
            <div className="wd-header-nav wd-header-secondary-nav text-left wd-full-height" role="navigation" aria-label="Secondary navigation">
              <ul id="menu-dharaa-main-menu" className="menu wd-nav wd-nav-secondary wd-style-bordered wd-gap-s dropdowns-loaded wd-offsets-calculated">
                {/* Stamps Menu */}
                <li id="menu-item-95995" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-95995 item-level-0 menu-mega-dropdown wd-event-hover menu-item-has-children dropdown-load-ajax dropdown-with-height">
                  <a href="https://dharaastamps.co.in/shop/postage-stamps/" className="woodmart-nav-link">
                    <span className="nav-link-text">STAMPS</span>
                  </a>
                  <div className="wd-dropdown-menu wd-dropdown wd-design-sized color-scheme-dark">
                    <div className="container">
                      {/* Dropdown Content for Stamps */}
                      <div className="vc_row wpb_row vc_row-fluid vc_custom_1591708779698">
                        <div className="wpb_column vc_column_container vc_col-sm-4 vc_col-has-fill wd-bg-right-top">
                          <div className="vc_column-inner vc_custom_1596735624636">
                            <div className="wpb_wrapper">
                              <ul className="wd-sub-menu mega-menu-list wd-wpb">
                                <li><a><span className="nav-link-text"><b>INDIAN STAMPS</b></span></a>
                                  <ul className="sub-sub-menu">
                                    <li><a href="https://dharaastamps.co.in/shop/postage-stamps/indian-stamps/post-republic-india-stamps/">Post / Republic India Stamps</a></li>
                                    <li><a href="https://dharaastamps.co.in/shop/postage-stamps/british-india-stamps-postage-stamps/">British India Stamps</a></li>
                                    <li><a href="https://dharaastamps.co.in/shop/postage-stamps/indian-stamps/india-fdc-special-covers-if/">India FDC / Special Covers & Information Folders</a></li>
                                    <li><a href="https://dharaastamps.co.in/shop/postage-stamps/indian-stamps/india-full-sheets-sheetlets/">Full Sheets / Sheetlets</a></li>
                                    <li><a href="https://dharaastamps.co.in/shop/postage-stamps/indian-stamps/indian-blocks-stamps/">Indian Blocks</a></li>
                                  </ul>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        {/* Add more dropdown content here */}
                      </div>
                    </div>
                  </div>
                </li>
                {/* Add more menu items here */}
              </ul>
            </div>
          </div>
          <div className="whb-column whb-col-center whb-visible-lg whb-empty-column"></div>
          <div className="whb-column whb-col-right whb-visible-lg">
            <div className="wd-header-text set-cont-mb-s reset-last-child">
              <a href="https://dharaastamps.co.in/track-order/">TRACK ORDER</a>
            </div>
            <div className="wd-header-divider wd-full-height"></div>
            <div className="wd-header-text set-cont-mb-s reset-last-child">
              <a href="https://dharaastamps.co.in/faq/">FAQ</a>
            </div>
          </div>
          <div className="whb-column whb-col-mobile whb-hidden-lg whb-empty-column"></div>
        </div>
      </div>
    </div>
  );
};

export default MenuComponent;
