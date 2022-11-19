// Imports
const Job = require('../../server/model/Job');

// Hi
const create_post = document.getElementById("{POST-BUTTON}");
const find_post = document.getElementById("{FIND-POST-BUTTON}");

// Interactions
create_post.onclick = () => postJob();
find_post.onclick = () => findJob();

// Functions
const postJob = () =>
{
    // TODO
}

const findJob = () =>
{
    Post.findOne({_id: 123})
    .populate('postedBy')
    .exec(function(err, post)
    {
        // do stuff with post
    });
}
