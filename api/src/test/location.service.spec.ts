import * as locationService from '../location/location.service';


describe('get location from GeeServer', () => {
    it('Given two known cordinates of a CMNTY_HLTH_SERV_AREA_NAME,' +
        'should return a valid Community Health Service Area',
        async () => {

            const lat = parseFloat("+48.4251378");
            const long = parseFloat("-123.3646335");

            const response = await locationService.getLocationfromCordinates(lat, long);
            expect(response).toEqual("Downtown Victoria/Vic West");
        })
    it('should resolve with empty string if cordinates do not return a '+
        'Community Health Service Area', async () => {
        const lat = parseFloat("+58.4251378");
        const long = parseFloat("-13.36");

        const response = await locationService.getLocationfromCordinates(lat, long);
        expect(response).toEqual("");
       
    })
})


