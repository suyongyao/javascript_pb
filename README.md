# javascript_pb
vanillaJS progress bar

Features:
- Read data from the endpoint
- Multiple bars
- One set of controls that can control each bar on the fly
- Can't go under 0
- Can go over limit (defined in API), but limit the bar itself and change its colour
- Display usage amount, centered


Example structure from the endpoint:

{
    "buttons": [
        10,
        38,
        -13,
        -18
    ],
    "bars": [
        62,
        45,
        62
    ],
    "limit": 230
}


Key	Description
buttons	- The amount of buttons to display and what value they increment or decrement the selected bar. Randomly generates between 4 and 6 buttons.
bars	- The number of progress bars to display and their default values. Randomly generates between 2 and 5 progress bars.
limit	- The equivalent to 100% of each bar. For example, the bar should be 100% filled when the progress hits 230.
