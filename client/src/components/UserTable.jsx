import React, { useState } from 'react';
import axios from 'axios';

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const url = 'https://chitwanhumad.pythonanywhere.com/get-users';
  const username = 'Aarti01'; 
  const password = 'Aarti0925';

  const fetchUsers = async () => {
    setLoading(true);
    setError(null); 
    console.log("Fetching users..."); // Log when fetching starts
    try {
      const response = await axios.get(url, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        auth: {
          username: username, 
          password: password,  
        },
      });

      console.log('API Response:', response.data); // Log the API response

      if (response.data.firstname) {
        const formattedData = Object.keys(response.data.firstname).map((key) => ({
          id: key,
          firstName: response.data.firstname[key],
          lastName: response.data.lastname[key],
          email: response.data.email[key],
          mobile: response.data.mobile[key],
          userType: response.data.usertype[key],
          subscriptionEndDate: response.data.subcriptionenddate[key],
          lastLoginDate: response.data.lastlogindate[key],
          subscriptionType: response.data.subcriptiontype[key],
          city: response.data.city[key],
          gender: response.data.gender[key],
          lastPaymentDate: response.data.lastpaymentdate[key],
          transactionUPI: response.data.transactionupi[key],
          transactionRef: response.data.transactionref[key],
          saleChannel: response.data.salechannel[key],
          partnerMobile: response.data.partnermobile[key],
          promotionCode: response.data.promotioncode[key],
          createDate: response.data.createdate[key],
          freeTrialTaken: response.data.freetrialtaken[key],
          lastUpdateDate: response.data.lastupdatedate[key],
          activeStatus: response.data.ActiveStatus[key],
          freeTrialEndDate: response.data.freetrialenddate[key],
          reportDate: response.data.ReportDate[key],
        }));
        setUsers(formattedData);
      } else {
        throw new Error('No user data found');
      }
    } catch (error) {
      console.error('API call error:', error); // Log error details
      if (error.response) {
        console.error('Response data:', error.response.data); // Log response data
        console.error('Response status:', error.response.status); // Log response status
        console.error('Response headers:', error.response.headers); // Log response headers
      } else if (error.request) {
        console.error('Request data:', error.request); // Log request data
      } else {
        console.error('Error message:', error.message); // Log error message
      }
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={fetchUsers}>User Data</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      
      {users.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>User Type</th>
              <th>Subscription End Date</th>
              <th>Last Login Date</th>
              <th>Subscription Type</th>
              <th>City</th>
              <th>Gender</th>
              <th>Last Payment Date</th>
              <th>Transaction UPI</th>
              <th>Transaction Ref</th>
              <th>Sale Channel</th>
              <th>Partner Mobile</th>
              <th>Promotion Code</th>
              <th>Create Date</th>
              <th>Free Trial Taken</th>
              <th>Last Update Date</th>
              <th>Active Status</th>
              <th>Free Trial End Date</th>
              <th>Report Date</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.mobile}</td>
                <td>{user.userType}</td>
                <td>{user.subscriptionEndDate}</td>
                <td>{user.lastLoginDate}</td>
                <td>{user.subscriptionType}</td>
                <td>{user.city}</td>
                <td>{user.gender}</td>
                <td>{user.lastPaymentDate}</td>
                <td>{user.transactionUPI}</td>
                <td>{user.transactionRef}</td>
                <td>{user.saleChannel}</td>
                <td>{user.partnerMobile}</td>
                <td>{user.promotionCode}</td>
                <td>{user.createDate}</td>
                <td>{user.freeTrialTaken}</td>
                <td>{user.lastUpdateDate}</td>
                <td>{user.activeStatus}</td>
                <td>{user.freeTrialEndDate}</td>
                <td>{user.reportDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserTable;
