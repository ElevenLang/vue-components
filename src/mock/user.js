import Mock from "mockjs";

const Random = Mock.Random;

const userInfo = {
    name: Random.cname(),
    follow_nums: Random.natural(1,1000),
    fans_nums: Random.natural(1, 1000),
    weibo_nums:Random.natural(1, 1000),
    address:Random.province(true),
    company: Random.cname(),
    img: Random.image('300x200'),
    intro: Random.csentence(15,30)


};

export default {
  "get|/getUser": () => {
    return {
      status: 200,
      message: "success",
      data: userInfo
    };
  },
};
