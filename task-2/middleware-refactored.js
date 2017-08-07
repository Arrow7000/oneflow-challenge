exports.inviteUser = function(req, res) {
    const invitationBody = req.body;
    const { email } = invitationBody;
    const { shopId } = req.params;
    const authUrl = "https://url.to.auth.system.com/invitation";

    superagent
        .post(authUrl)
        .send(invitationBody)
        .end(async(err, inviteRes) => {
            const { status, body } = inviteRes;
            const { authId, invitationId } = body;

            if (status === 201) {
                const opts = { upsert: true, new: true };

                const createdUser = await User.findOneAndUpdate({ authId }, { email }, opts);

                try {
                    const shop = await Shop.findById(shopId);

                    if (!shop) {
                        return res.status(500).send({ error: true, message: 'No shop found' });
                    }

                    const { invitations, users } = shop;

                    if (!invitations.includes(invitationId)) {
                        invitations.push(invitationId);
                    }
                    if (!users.includes(createdUser._id)) {
                        users.push(createdUser);
                    }

                    shop.save();

                } catch (err) {
                    res.status(500).send(err);
                }
            } else if (status === 200) {
                res.status(400).json({
                    error: true,
                    message: 'User already invited to this shop'
                });
            } else {
                res.json(inviteRes);
            }
        });
};
