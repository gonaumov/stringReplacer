describe("Test the two functions replaceStringWithNonCapturingGroup and replaceStringWithCharacterClass. ", function () {
    describe("replaceString must working properly with all symbols including newlines ", function () {
        it('must working properly without newlines', function () {
            var input = ['"START";',
                'var settings ={"dev":false,"production":"n","id":"bcdef","key":"1234xyz","secret":"22sdfas"}',
                '"END"'].join('');
            var expected = '"START";var __REPLACED = console.log(\'replaced\');"END"';
            var result = replaceString(input);

            expect(result).toEqual(expected);
        });

        it('must working properly with newlines', function () {
            var input = ['"START";',
                "\n",
                'var settings ={"dev":false,"production":"n","id":"bcdef","key":"1234xyz","secret":"22sdfas"}',
                '"END"'].join('');
            var expected = '"START";var __REPLACED = console.log(\'replaced\');"END"';
            var result = replaceString(input);

            expect(result).toEqual(expected);
        });

        it('must not change string when "START" and "END" is not present', function () {
            var input = 'example input';
            var result = replaceString(input);

            expect(result).toEqual(input);
        });
    });
});
