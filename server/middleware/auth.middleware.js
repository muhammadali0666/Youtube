const {schema} = require("../validation/register.validation")

const adminMiddleware = async (req, res, next) => {
const { error } = await schema.validate(req.body);
if (error) {
return await res.send({
  msg: "8 or more symbol required and @gmail.com required in email column!!!"
});
}
next();
};

module.exports = {
  adminMiddleware
}