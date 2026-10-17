// const express = require("express")
// const cookieParser = require("cookie-parser")
// const cors = require("cors")

// const app = express()

// app.use(express.json())
// app.use(cookieParser())
// app.use(cors({
//     origin: "http://localhost:5173",
//     credentials: true
// }))

// /* require all the routes here */
// const authRouter = require("./routes/auth.routes")
// const interviewRouter = require("./routes/interview.routes")


// /* using all the routes here */
// app.use("/api/auth", authRouter)
// app.use("/api/interview", interviewRouter)



// module.exports = app


// const express = require("express");
// const cookieParser = require("cookie-parser");
// const cors = require("cors");

// const app = express();

// const allowedOrigins = [
//     "http://localhost:5173",
//     process.env.CLIENT_URL,
// ].filter(Boolean);

// app.use(express.json());
// app.use(cookieParser());

// app.use(
//     cors({
//         origin: function (origin, callback) {
//             // Allow requests without an Origin header, such as server-to-server requests.
//             if (!origin || allowedOrigins.includes(origin)) {
//                 return callback(null, true);
//             }

//             return callback(new Error("Not allowed by CORS"));
//         },
//         credentials: true,
//     })
// );

// app.use(cors({
//     origin: [
//         "http://localhost:5173",
//         process.env.CLIENT_URL
//     ].filter(Boolean),
//     credentials: true
// }));

// app.get("/", (req, res) => {
//     res.status(200).json({
//         success: true,
//         message: "Interview AI Backend is running!"
//     });
// });

// app.get("/api/health", (req, res) => {
//     res.status(200).json({
//         success: true,
//         message: "Server is healthy"
//     });
// });

// // Routes
// const authRouter = require("./routes/auth.routes");
// const interviewRouter = require("./routes/interview.routes");

// app.use("/api/auth", authRouter);
// app.use("/api/interview", interviewRouter);

// module.exports = app;

const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

const allowedOrigins = [
"http://localhost:5173",
"https://interview-ai-resume.vercel.app",
];

app.use(
cors({
origin: allowedOrigins,
credentials: true,
})
);

app.use(express.json());
app.use(cookieParser());

// Authentication routes
const authRouter = require("./routes/auth.routes");
const interviewRouter = require("./routes/interview.routes");

app.use("/api/auth", authRouter);
app.use("/api/interview", interviewRouter);

module.exports = app;
