
/*
Q5: Boolean Logic Access System
Check whether the smart home is secure.
*/

function checkSecurity(
    isDoorLocked,
    isWindowClosed,
    isAlarmOn,
    isOwnerInside
) {
    // Unsafe if any required security condition is false
    const isUnsafe =
        !isAlarmOn ||
        !isDoorLocked ||
        !isWindowClosed ||
        !isOwnerInside;

    // All conditions must be satisfied
    const isSecure =
        isAlarmOn &&
        isDoorLocked &&
        isWindowClosed &&
        isOwnerInside;

    if (isSecure && !isUnsafe) {
        console.log("Secure");
    } else {
        console.log("Unsafe");
    }
}

// Test 1: All conditions satisfied
checkSecurity(true, true, true, true);

// Test 2: Alarm is off
checkSecurity(true, true, false, true);

// Test 3: Window is open
checkSecurity(true, false, true, true);
