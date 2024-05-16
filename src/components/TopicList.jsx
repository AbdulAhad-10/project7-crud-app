"use client";

import { List } from "antd";
import { EditOutlined } from "@ant-design/icons";
import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
const data = [
  {
    title: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 2",
  },
  {
    title: "Ant Design Title 3",
  },
  {
    title: "Ant Design Title 4",
  },
];

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error fetching topics: ", error);
  }
};

const TopicList = async () => {
  const { topics } = await getTopics();

  return (
    <div>
      (
      {topics.map((topic) => (
        <List.Item key={topic._id}>
          <List.Item.Meta
            title={<h2 className="text-2xl font-bold">{topic.title}</h2>}
            description={`${topic.description}`}
          />
          <div className="flex gap-2">
            <RemoveBtn />
            <Link href={`/addTopic/${topic._id}`}>
              <EditOutlined className="text-2xl" />
            </Link>
          </div>
        </List.Item>
      ))}
    </div>
  );
};

export default TopicList;
