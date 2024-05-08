import { createRoot } from 'react-dom/client';
import { Calc } from "./calc"
import React from 'react';


const root = createRoot(document.getElementById('app')!);

root.render(
    <>
        <Calc />
    </>
)