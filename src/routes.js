import ShowBlogs from "./screens/showBlogs/showBlogs";
import AddBlog from "./screens/addBlog/addBlog";
import SingleBlog from "./screens/singleBlog/singleBlog";

export default [{
		path: "/",
		component: ShowBlogs
	},
	{
		path: "/add",
		component: AddBlog
	},
	{
		path: "/blog/:id",
		component: SingleBlog
	},
]