import React from 'react';
import './PurchaseDetail.css';
const PurchaseDetail = () => {
  return (
    <div>
      <div className='container-fluid'>
        <div className='col-sm-6 text-right'>
          <div className='ticket light'>
            <div className='ticket-head text-center'>
              <div className='layer'></div>
              <div className='from-to'>
                ams <span className='icon icon-airplane'></span> jfk
              </div>
            </div>
            <div className='ticket-body'>
              <div className='passenger'>
                <p>passenger</p>
                <h4>michelle doe</h4>
              </div>
              <div className='flight-info row'>
                <div className='col-xs-6'>
                  <p>flight</p>
                  <h4>NY341</h4>
                </div>
                <div className='col-xs-6'>
                  <p>seat</p>
                  <h4>14A</h4>
                </div>
              </div>
              <div className='flight-date'>jun-28-2017 at 08:30am</div>
              <div className='barcode'></div>
            </div>
            <div className='footer'>
              <div className='disclaimer'>
                Disclaimer: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Cupiditate debitis doloremque in inventore eum
              </div>
            </div>
          </div>
        </div>
        <div className='col-xs-6 hidden-xs text-left'>
          <div className='ticket dark'>
            <div className='ticket-head text-center'>
              <div className='layer'></div>
              <div className='from-to'>
                ams <span className='icon icon-airplane'></span> jfk
              </div>
            </div>
            <div className='ticket-body'>
              <div className='passenger'>
                <p>passenger</p>
                <h4>michelle doe</h4>
              </div>
              <div className='flight-info row'>
                <div className='col-xs-6'>
                  <p>flight</p>
                  <h4>NY341</h4>
                </div>
                <div className='col-xs-6'>
                  <p>seat</p>
                  <h4>14A</h4>
                </div>
              </div>
              <div className='flight-date'>jun-28-2017 at 08:30am</div>
              <div className='barcode'></div>
            </div>
            <div className='footer'>
              <div className='disclaimer'>
                Disclaimer: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Cupiditate debitis doloremque in inventore eum
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseDetail;
