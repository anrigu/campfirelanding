/* COLOR CODING 
courses + academics - #4aa564
student orgs - #00a6d2
locations - #ff6b84
identity/experience - #f9c642
*/

const academics = '#4aa564';
const orgs = '#00a6d2';
const locations = '#ff6b84';
const idExp = '#f9c642';

const TeamMemberTags = [
    [
        // Anri
        {
            title: "EST/EDT",
            color: locations,
        }, 
        {
            title: "Astronomy", 
            color: academics,
        },
        {
            title: "Toronto Blue Jays", 
            color: idExp,
        },
        {
            title: "Mandarin", 
            color: idExp,
        },
    ],

    [
        // Jenny 
        {
            title: "Neuroscience",
            color: academics,
        }, 
        {
            title: "Chinese Dance", 
            color: idExp,
        },
        {
            title: "Harvard Class of 2022", 
            color: academics, 
        },
        {
            title: "Career Networking", 
            color: idExp,
        },
    ],

    [
        {
            title: "Skiing", 
            color: idExp,
        },
        {
            title: "Seattle", 
            color: locations,
        },
        {
            title: "Women in Tech", 
            color: idExp,
        },
        {
            title: "Korean", 
            color: idExp,
        },  
    ],

    [
        {
            title: "Student Athlete",
            color: orgs,
        }, 
        /*{
            title: "Vegan", 
            color: idExp,
        },*/
        {
            title: "Harvard Class of 2024", 
            color: academics, 
        },
        {
            title: "California", 
            color: locations,
        },
        {
            title: "Social Justice", 
            color: idExp,
        },
    ],

    [
        {
            title: "New Orleans", 
            color: locations,
        },
        {
            title: "BIPOC", 
            color: idExp,
        },
        {
            title: "Animation", 
            color: academics,
        },
        {
            title: "MIT Gymnastics", 
            color: orgs,
        },
    ],
];

export default TeamMemberTags;
