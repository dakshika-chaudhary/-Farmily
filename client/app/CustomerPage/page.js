'use client';

import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function CustomerPage(){


    return(
<div>
    <Header/>
<div>hi</div>
<li><a className="dropdown-item" href="/CustomerDemand">CustomerDemand</a></li>

<Footer/>
</div>
    );


}
