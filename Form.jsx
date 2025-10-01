import React, { useState } from "react";
import "./AppointmentForm.css";

export default function Form() {
  const [formData, setFormData] = useState({
    date: "",
    timeRange: "",
    patientName: "",
    gender: "",
    email: "",
    phone: "",
    doctor: "",
    priority: "",
    consultant: "",
    status: "",
    nurse: "",
    caseId: "",
    encounterId: "",
    paymentMode: "",
    paymentStatus: ""
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    const required = ["date","timeRange","patientName","gender","doctor","priority","consultant"];
    for (let key of required) {
      if (!formData[key]) {
        alert(`${key} is required!`);
        return;
      }
    }

    setShowModal(true);
  };

  return (
    <div className="appointment-form">
      
      <div className="form-header">
        <div className="left">
          <label>Select Patient</label>
          <select>
            <option>Select Patient</option>
            <option>Patient A</option>
            <option>Patient B</option>
          </select>
        </div>
        <div className="right">
          <button className="new-patient-btn">+ New Patient</button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="form-body">
        <div className="form-grid">
          <div>
            <label>Date *</label>
            <input type="date" name="date" value={formData.date} onChange={handleChange} />
          </div>
          <div>
            <label>Time Range *</label>
            <input type="text" name="timeRange" placeholder="09:00 AM - 10:00 AM"
              value={formData.timeRange} onChange={handleChange} />
          </div>
          <div>
            <label>Patient Name *</label>
            <input type="text" name="patientName" value={formData.patientName} onChange={handleChange} />
          </div>
          <div>
            <label>Gender *</label>
            <select name="gender" value={formData.gender} onChange={handleChange}>
              <option value="">Select</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
          </div>
          <div>
            <label>Phone</label>
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
          </div>
          <div>
            <label>Doctor *</label>
            <select name="doctor" value={formData.doctor} onChange={handleChange}>
              <option value="">Select</option>
              <option>George William</option>
              <option>Helen Jones</option>
              <option>Kofi Owusu</option>
              <option>Akwasi Owusu</option>
            </select>
          </div>
          <div>
            <label>Appointment Priority *</label>
            <select name="priority" value={formData.priority} onChange={handleChange}>
              <option value="">Select</option>
              <option>Normal</option>
              <option>High</option>
              <option>Critical</option>
            </select>
          </div>
          <div>
            <label>Live Consultant (Video) *</label>
            <select name="consultant" value={formData.consultant} onChange={handleChange}>
              <option value="">Select</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          <div>
            <label>Status</label>
            <select name="status" value={formData.status} onChange={handleChange}>
              <option value="">Select</option>
              <option>Pending</option>
              <option>Confirmed</option>
              <option>Completed</option>
            </select>
          </div>
          <div>
            <label>Nurse</label>
            <input type="text" name="nurse" value={formData.nurse} onChange={handleChange} />
          </div>
          <div>
            <label>Case ID</label>
            <input type="text" name="caseId" value={formData.caseId} onChange={handleChange} />
          </div>
          <div>
            <label>Encounter ID</label>
            <input type="text" name="encounterId" value={formData.encounterId} onChange={handleChange} />
          </div>
          <div>
            <label>Payment Mode</label>
            <select name="paymentMode" value={formData.paymentMode} onChange={handleChange}>
              <option value="">Select</option>
              <option>Cash</option>
              <option>Card</option>
              <option>Insurance</option>
            </select>
          </div>
          <div>
            <label>Payment Status</label>
            <select name="paymentStatus" value={formData.paymentStatus} onChange={handleChange}>
              <option value="">Select</option>
              <option>Pending</option>
              <option>Paid</option>
            </select>
          </div>
        </div>

        <div className="form-footer">
          <button type="submit" className="save-btn">Save</button>
        </div>
      </form>

      
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <h3>Appointment Details</h3>
              <button className="close-btn" onClick={() => setShowModal(false)}>×</button>
            </div>
            <div className="modal-body">
              <pre>{JSON.stringify(formData, null, 2)}</pre>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
