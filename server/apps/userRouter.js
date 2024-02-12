import { Router } from "express";

const userRouter = Router();

let user = [
  {
    id: 1,
    firstname: "Somsak",
    lastname: "Deemak",
    gender: "Male",
    birthdate: "13/06/2000",
  },
  {
    id: 2,
    firstname: "Manee",
    lastname: "DeeDee",
    gender: "Female",
    birthdate: "21/01/2001",
  },
];

// ดูข้อมูล User ทั้งหมด

userRouter.get("/", function (req, res) {
  try {
    return res.json({
      data: user,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Data not found",
    });
  }
});

// ดูข้อมูล User จากชื่อหรือนามสกุล

userRouter.get("/:nameSurname", function (req, res) {
  let nameSurnameFromClient = req.params.nameSurname;

  let userData = user.filter((item) => {
    return (
      item.firstname.includes(nameSurnameFromClient) ||
      item.lastname.includes(nameSurnameFromClient)
    );
  });

  if (!userData[0]) {
    return res.status(404).json({
      message: "Data not found",
    });
  }

  return res.json({
    data: userData,
  });
});

// สร้างข้อมูล User

userRouter.post("/", function (req, res) {
  if (
    req.body.firstname === "" &&
    req.body.lastname === "" &&
    req.body.gender === "" &&
    req.body.birthdate === ""
  ) {
    return res.status(400).json({
      message: "Please fill your information",
    });
  }

  user.push({
    id: user[user.length - 1].id + 1,
    ...req.body,
  });

  return res.json({
    message: "User has been created successfully",
  });
});

// อัพเดท User

userRouter.put("/:id", function (req, res) {
  let userIdFromClient = Number(req.params.id);

  const userIndex = user.findIndex((item) => {
    return item.id === userIdFromClient;
  });

  if (userIndex === -1) {
    return res.status(404).json({
      message: "Cannot update, No data available!",
    });
  }

  user[userIndex] = { id: userIdFromClient, ...req.body };

  return res.json({
    message: "User has been updated successfully",
  });
});

// ลบ User

userRouter.delete("/:id", function (req, res) {
  let userIdFromClient = Number(req.params.id);

  const newUserData = user.filter((item) => {
    return item.id !== userIdFromClient;
  });

  const originalLength = user.length;

  if (newUserData.length === originalLength) {
    return res.status(404).json({
      message: "Cannot Delete, No data available!",
    });
  }

  user = newUserData;

  return res.json({
    message: `Blog post Id ${userIdFromClient} has been deleted successfully `,
  });
});

export default userRouter;
