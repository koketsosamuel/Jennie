module.exports = {

  communicate: (req, res) => {


    res.send(req.manager)

  },


  loadChatView: (req, res) => {
    res.render("chat")
  }


}