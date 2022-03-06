let rating = 10

switch (rating) {
    case 1:
        console.log(`PIP Plan - FIX`);
        break;
    case 2:
        console.log(`Needs improvement`);
        break;
    case 3:
        console.log(`Met Expectation`);
        break;
    case 4:
        console.log(`Excellent performance`);
        break;
    case 5:
        console.log(`Outstanding performance!!! Elibible for Promotion`);
        break;
    default:
        console.log(`Please Opt valid rating`);
        break;
}