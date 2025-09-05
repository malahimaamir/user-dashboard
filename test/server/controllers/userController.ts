import { Request, Response } from "express";
import User from "../models/User";
export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await User.create({
      ...req.body,
      photo: req.file
        ? {
            data: req.file.buffer,
            contentType: req.file.mimetype,
          }
        : undefined,
    });

    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: "Error creating user", error });
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();

          const usersWithPhotos = users.map((u) => ({
      ...u.toObject(),
      photo: u.photo?.data
        ? `data:${u.photo.contentType};base64,${u.photo.data.toString(
            "base64"
          )}`
        : null,
    }));

    res.json(usersWithPhotos);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users" });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const updateData: any = { ...req.body };

       if (req.file) {
      updateData.photo = {
        data: req.file.buffer,
        contentType: req.file.mimetype,
      };
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      updateData,
      {
        new: true,
      }
    );

    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: "Error updating user", error });
  }
};
