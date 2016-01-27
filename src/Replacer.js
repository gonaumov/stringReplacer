/**
 * This function assumes string as a argument and
 * replaces everything  between "START" and "END"
 * with "START";var __REPLACED = console.log('replaced');"END"
 * @param input string
 * @author Georgi Naumov
 * gonaumov@gmail.com for contacts and
 * suggestions.
 */
function replaceString(input) {
    var re = /^("START")(?:(?:(?!"END")[\s\S])+)("END")$/g;
    return input.replace(re, function (match, p1, p2) {
        return p1 + ";var __REPLACED = console.log('replaced');" + p2;
    });
}