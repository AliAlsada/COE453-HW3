exports.mul = (req, res) => {
  const {X, Y} = req.body;
  const result = Number(X) * Number(Y)
  res.status(200).json({ "x": X, "y": Y, "result": result });
};
