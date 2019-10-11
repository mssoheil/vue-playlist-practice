import ShowBlogs from "./screens/showBlogs/showBlogs";
import AddBlog from "./screens/addBlog/addBlog";
import SingleBlog from "./screens/singleBlog/singleBlog";


export default [{
		path: "/",
		name: "home",
		component: ShowBlogs
	},
	{
		path: "/add",
		name: "addBlog",
		component: AddBlog
	},
	{
		path: "/blog/:id",
		name: "singleBlog",
		component: SingleBlog
	},
]