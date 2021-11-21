export default function splitString(input, separator) {

    if(typeof separator !== "string" || typeof input !== 'string'){
        throw new Error({
            message:"Invalid data passed",
            functionName: 'splitString',
            arguments
        })
    }

    // Early bail if inputs are 0 length
    if ( input.length === 0 ||   separator.length === 0) {
        return [];
    }

    let strle = separator.length;

    let output = [];

    let lastIndex = 0;

    for (let i = 0; i <= input.length - strle; ) {
        let x = i + strle;
        if (input.slice(i, x) === separator) {
            // This is case where there are contiguous amount of separator
            if (lastIndex !== i) {
                output.push(input.slice(lastIndex, i));
            }
            output.push(separator);
            lastIndex = i = x;
        } else {
            i++;
        }
    }
    if (lastIndex < input.length) {
        output.push(input.slice(lastIndex, input.length));
    }
    return output;
}
