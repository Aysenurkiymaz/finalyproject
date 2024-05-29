const Event = require('../model/event');
const Guest = require('../model/guest');

module.exports = {
    viewEvent: (req, res) => {
        res.render('event');
    },

    dashboardView: (req, res) => {
        const events = Event.findAll({
            include: [Guest] // Guest modelini de dahil et
        })
        res.render('dashboard', {
            events: events
        });
    },
    createEvent: async (req, res) => {

        const event = await Event.create({
            name: req.body.name,
            organization: req.body.organization,
            date: req.body.date,
        });
        event.save();

        for (const guestName of req.body.guestList) {
            const guest = await Guest.create({
                name: guestName,
                event: event,
            });
            guest.save();
        }
        event.save();

        console.log('Request Body: ', event);
        res.json(event);
        res.end();
       // sequelize.events
    },
    
}
