import React from 'react'
import "./styles/ProfileDashboard.css"

const Profile = ({selectedAccount}) => {
    const latitude = selectedAccount?.address?.geo?.lat;
    const longitude =selectedAccount?.address?.geo?.lng;
    const mapUrl = `https://maps.google.com/maps?q=${latitude},${longitude}&output=embed`;
  return (
    <div className="body-section">
                    <div className="body-left">
                        <img src={selectedAccount?.profilepicture} alt="profile Image" className="photo" />
                        <h3>{selectedAccount?.name}</h3>
                        <div class="grid-container">
                            <div class=" left-column">Username :</div>
                            <b class=" right-column">{selectedAccount?.username}</b>
                            <div class="left-column">e-mail :</div>
                            <b class="right-column">{selectedAccount?.email}</b>
                            <div class="left-column">Phone :</div>
                            <b class="right-column">{selectedAccount?.phone.slice(0, 15)}</b>
                            <div class="left-column">Website :</div>
                            <b class=" right-column">{selectedAccount?.website}</b>
                        </div>
                        <hr />
                        <b>Company</b>
                        <div class="grid-container-company">
                            <div class=" left-column">Name :</div>
                            <b class=" right-column">{selectedAccount?.company?.name}</b>
                            <div class="left-column">catchPhrase :</div>
                            <b class="right-column">{selectedAccount?.company?.catchPhrase}</b>
                            <div class="left-column">bs :</div>
                            <b class="right-column">{selectedAccount?.company?.bs}</b>
                        </div>

                    </div>
                    <div className="body-right">
                        <b>Address</b>
                        <div class="grid-container-address">
                            <div class=" left-column">Street :</div>
                            <b class=" right-column">{selectedAccount?.address?.street}</b>
                            <div class="left-column">Suite :</div>
                            <b class="right-column">{selectedAccount?.address?.suite}</b>
                            <div class="left-column">City :</div>
                            <b class="right-column">{selectedAccount?.address?.city}</b>
                            <div class="left-column">Zipcode :</div>
                            <b class="right-column">{selectedAccount?.address?.zipcode}</b>
                        </div>
                        <div className="map">
                            <iframe
                                title="Map"
                                width="100%"
                                height="100%"
                                src={mapUrl}
                               
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className='coordiantes'>
                            <span>Lat : </span><b>{latitude}</b>
                            <span>Lng : </span><b>{longitude}</b>
                        </div>
                    </div>
                </div>
  )
}

export default Profile
