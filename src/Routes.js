import React from "react";
import { Routes, Route } from "react-router-dom";
import {
PetOwnerCreate, PetOwnerEdit, PetOwnerView, 
PetOwnerList
} from "screens";

const Component = (props) => {

    return (
        <Routes>
            

                        
                                                        <Route path="PetOwners/view/:id" element={<PetOwnerView {...props} title={'View PetOwner'} />} />
                        <Route path="PetOwners/edit/:id" element={<PetOwnerEdit {...props} title={'Edit PetOwner'} />} />
                        <Route path="PetOwners/create" element={<PetOwnerCreate {...props} title={'Create PetOwner'} />} />

                <Route path="/customerdetails" element={<PetOwnerList {...props} title={'customers'} />} />
        </Routes>
    )

};

export default Component;