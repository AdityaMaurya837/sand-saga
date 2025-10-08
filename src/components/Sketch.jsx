import { Button } from "@mui/material";
import React, { useState } from "react";


export default function Sketch() {
    return (
        <section className="sketch-section">
            <div className="sketch-section-heading">
                <h2>Have a story you've sketched?</h2>
            </div>
            <div className="sketch-section-info">
                <textarea
                    rows={4}
                    placeholder="Write  here..."
                    className="w-full resize-none bg-transparent focus:outline-none text-gray-700 px-2 py-1"
                />                <Button>Submit Comic</Button>
            </div>
        </section>
    );
}
