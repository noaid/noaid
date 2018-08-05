/**
 * Created by ximing on 12/1/17.
 */
"use strict";
import React, { Component } from "react";

export default function LoadingComponent(props) {
    if (props.error) {
        // When the loader has errored
        return <div>Error!{props.error}</div>;
    } else if (props.timedOut) {
        // When the loader has taken longer than the timeout
        return <div>Taking a long time...</div>;
    } else if (props.pastDelay) {
        // When the loader has taken longer than the delay Loading...
        return <div />;
    } else {
        // When the loader has just started
        return null;
    }
}
