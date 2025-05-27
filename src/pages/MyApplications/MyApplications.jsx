import React, { Suspense } from 'react';
import MyApplicationStats from './MyApplicationStats';
import ApplicationList from './ApplicationList';
import LoaderSpinner from '../../components/LoaderSpinner';
import useAuth from '../../hooks/useAuth';


const myApplicationsPromise = (email) => {
    return fetch(`http://localhost:3000/applications?email=${email}`)
    .then(res => res.json())
}



const MyApplications = () => {
    
    const {user} = useAuth();

    
    return (
        <div>
            <MyApplicationStats></MyApplicationStats>

            <Suspense fallback={<LoaderSpinner></LoaderSpinner>}>
                <ApplicationList myApplicationsPromise={myApplicationsPromise(user.email)}></ApplicationList>
            </Suspense>
        </div>
    );
};

export default MyApplications;