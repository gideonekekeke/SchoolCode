import React, { useEffect, useState } from "react";
import styled from "styled-components";

import axios from "axios";
import { useRecoilValue } from "recoil";
import { User } from "../../Global/RecoilState";

const url: string = "https://school-code.onrender.com";

interface IData {
  _id: string;
  className: string;
  attendance: [];
  schoolName: string;
  classTeacher: string;
  name: string;
  email: string;
  classID: string;
  subject: [];
}

function ReportCard() {
  const user = useRecoilValue(User);

  const [scoreRemarkData, setScoreRemarkData] = useState({} as any);

  const getScoreResult = async () => {
    const newURL = `${url}/api/performance/${
      user!._id
    }/general-student-performance`;

    await axios.get(newURL).then((res) => {
      setScoreRemarkData(res.data);
    });
  };

  useEffect(() => {
    getScoreResult();
  }, []);

  return (
    <>
      <Container>
        <Content>
          <span>{user?.name}</span>
          <MainHold>
            <LoaderHold>
              <Holding>
                <span>Report Card</span>
                <Div>Report Card Performance</Div>
              </Holding>
            </LoaderHold>
            <NextRec>
              <span>Next Recommended action:</span>
              <Ad>{user?.email}</Ad>
            </NextRec>
          </MainHold>

          <MainHold2>
            {/* <Cont>
              <Tog>
                <h5>Detail test and exam performance for {user?.name}</h5>
                <span>
                  Present class: <strong>{user?.className}</strong>
                </span>
                <br />
                <span>
                  class Teacher: <strong>{classInfo?.classTeacher}</strong>
                </span>
                <br />
              </Tog>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                {myResult.map((props) => (
                  <AllSubBox1 key={props._id}>
                    <Main>
                      <First>
                        <Title>{props.testTitle} Test</Title>
                        <IconHold>
                          <FiMoreVertical />
                        </IconHold>
                      </First>
                      <span>subject: {props.testName}</span>

                      <div
                        style={{
                          marginTop: "5px",
                        }}
                      >
                        {" "}
                        <div
                          style={{
                            color: "#F8C46B",
                            fontSize: "11px",
                          }}
                        >
                          SubjectTeacher :{" "}
                        </div>
                        <div style={{ fontSize: "13px" }}>
                          {" "}
                          {props.teacherName}
                        </div>
                      </div>
                      <br />

                      <div
                        style={{
                          marginTop: "5px",
                          display: "flex",
                          justifyContent: "space-around",
                          alignContent: "center",
                        }}
                      >
                        {" "}
                        <div
                          style={{
                            fontSize: "11px",
                            alignItems: "center",
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          {" "}
                          <div
                            style={{
                              color: "lightblue",
                              fontSize: "11px",
                            }}
                          >
                            Grade/Question
                          </div>
                          <div
                            style={{
                              fontWeight: "bold",
                            }}
                          >
                            {props.gradeScore} Mark
                          </div>
                        </div>
                        <div
                          style={{
                            fontSize: "11px",
                            alignItems: "center",
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          {" "}
                          <div
                            style={{
                              color: "lightblue",
                              fontSize: "11px",
                            }}
                          >
                            Score
                          </div>
                          <div
                            style={{
                              fontWeight: "bold",
                            }}
                          >{`${props.gradeScore * props.maxLength} / ${
                            props.totalScore
                          } `}</div>
                        </div>
                        <div
                          style={{
                            fontSize: "11px",
                            alignItems: "center",
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          {" "}
                          <div
                            style={{
                              color: "lightblue",
                              fontSize: "11px",
                            }}
                          >
                            Grade
                          </div>
                          <div
                            style={{
                              fontWeight: "bold",
                            }}
                          >
                            {" "}
                            {props.grade}
                          </div>
                        </div>
                        <div
                          style={{
                            fontSize: "11px",
                            alignItems: "center",
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          {" "}
                          <div
                            style={{
                              color: "lightblue",
                              fontSize: "11px",
                            }}
                          >
                            percentage
                          </div>
                          <div
                            style={{
                              fontWeight: "bold",
                            }}
                          >
                            {" "}
                            {props.precentage}
                          </div>
                        </div>
                      </div>
                      <br />
                      <div
                        style={{
                          fontSize: "10px",
                          fontWeight: "bold",
                          display: "flex",
                        }}
                      >
                        Test done:{" "}
                        <div
                          style={{
                            textTransform: "uppercase",
                            marginLeft: "5px",
                          }}
                        >
                          {moment(props.createdAt).fromNow()}
                        </div>
                      </div>
                    </Main>
                  </AllSubBox1>
                ))}
              </div>
            </Cont> */}

            <TableHolder>
              <Table>
                <TableMark>
                  <Subject>Subject</Subject>
                  <Score>Test Scores</Score>
                  <TotalScore>Total Score</TotalScore>
                  <Remark>Remark</Remark>
                </TableMark>
              </Table>
              <Table>
                <TableMark2>
                  <Subject>
                    {scoreRemarkData?.data?.subjectName?.map(
                      (el: any, i: number) => (
                        <SubjectName key={i}>
                          <Score>{el}</Score>
                        </SubjectName>
                      )
                    )}
                  </Subject>
                  <Score>
                    {scoreRemarkData?.data?.score?.map((el: any, i: number) => (
                      <SubjectName key={i}>
                        {el.map((props: any, i: number) => (
                          <Score key={i}>{props}</Score>
                        ))}
                      </SubjectName>
                    ))}
                  </Score>

                  <TotalScore>
                    {scoreRemarkData?.data?.overAllMark?.map(
                      (el: number, i: number) => (
                        <SubjectName key={i}>
                          <strong>
                            <Score>{el}</Score>
                          </strong>
                        </SubjectName>
                      )
                    )}
                  </TotalScore>

                  <Remark>
                    {scoreRemarkData?.data?.remarkData?.map(
                      (el: any, i: number) => (
                        <Remark key={i}>
                          <strong>{el!.remark}</strong>
                        </Remark>
                      )
                    )}
                  </Remark>
                </TableMark2>
              </Table>
            </TableHolder>
          </MainHold2>

          {/* <TableHolder>
            <Table>
              <Subject>Subject</Subject>
              <Score>Test Scores</Score>
              <Score>Total Score</Score>
            </Table>
            <Table>
              <Subject>
                {subjectData?.map((el: any, i: number) => (
                  <SubjectName key={i}>
                    <Score>{el}</Score>
                  </SubjectName>
                ))}
              </Subject>
              <Score>
                {score.map((el: any, i: number) => (
                  <SubjectName key={i}>
                    {el.map((props: any, i: number) => (
                      <Score key={i}>{props}</Score>
                    ))}
                  </SubjectName>
                ))}
              </Score>
              <Score>
                {subjectDataFileScore.map((el: number, i: number) => (
                  <SubjectName key={i}>
                    <strong>
                      <Score>{el}</Score>
                    </strong>
                  </SubjectName>
                ))}
              </Score>
            </Table>
          </TableHolder> */}
        </Content>
      </Container>
    </>
  );
}

export default ReportCard;

const Remark = styled.div`
  flex: 1;
  text-transform: capitalized;
  display: flex;
  flex-direction: column;
  margin: 15px 0;
  // background-color: lightblue;
  min-width: 300px;
`;

const TableMark2 = styled.div`
  border-bottom: 1px solid silver;
  display: flex;
  width: 100%;
  // background-color: red;
`;

const TableMark = styled.div`
  border-bottom: 1px solid silver;
  display: flex;
  width: 100%;
`;

const TotalScore = styled.div`
  margin: 10px;
  width: 150px;
`;

const SubjectName = styled.div`
  margin: 10px 0;
  display: flex;
  min-width: 60px;
`;

const TableHolder = styled.div``;

const Score = styled.div`
  margin: 10px;
  width: 200px;
  // border-right: 1px solid silver;
`;

const Subject = styled.div`
  margin: 10px;
  width: 150px;

  :hover {
    background-color: gray;
  }
`;

const Table = styled.div`
  display: flex;
  width: 100%;
`;

const TeacherImage = styled.img`
  height: 20px;
  width: 20px;
  background-color: silver;
  border-radius: 50%;
  margin-right: 5px;
`;

const Conta4 = styled.div`
  position: absolute;
  background-color: white;
  min-width: 200px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  display: flex;
  top: 0;
  right: 0;
  padding: 10px;
  border-radius: 5px;
  /* left: 20px; */
  flex-direction: column;

  span {
    font-size: 11px;
    font-weight: 400;
  }

  @media screen and (max-width: 768px) {
    /* top: 150px; */
  }
`;

const Conta3 = styled.div`
  position: absolute;
  background-color: white;
  min-width: 200px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  display: flex;
  top: 0;
  right: 0;
  /* left: 0; */
  padding: 10px;
  border-radius: 5px;
  /* left: 20px; */
  flex-direction: column;

  span {
    font-size: 11px;
    font-weight: 400;
  }

  @media screen and (max-width: 768px) {
    /* top: 150px; */
  }
`;

const Main = styled.div`
  margin-left: 10px;

  span {
    height: 25px;
    width: 150px;
    display: flex;
    background-color: #f4f4f4;
    padding-left: 5px;
    font-size: 12px;
    /* justify-content: center; */
    align-items: center;
    /* border: 3px solid #f4f4f4; */
    border-radius: 4px;
    font-weight: 500;
    color: #9e9e9e;
    margin-bottom: 5px;
  }
`;

const First = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3px;
`;
const Title = styled.div`
  font-weight: bold;
`;
const IconHold = styled.div`
  margin-right: 10px;
`;

const AllSubBox1 = styled.div`
  width: 300px;
  border: 1px solid #f4f4f4;
  position: relative;
  /* height: 100px; */
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 10px;
  margin: 10px;
  transition: all 350ms;
  cursor: pointer;

  :hover {
    border: 1px solid #c3c3c3;
  }
`;

const AllSubBox = styled.div`
  width: 100%;
  border: 1px solid #f4f4f4;
  position: relative;
  /* height: 100px; */
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 10px;
  margin: 10px;
  transition: all 350ms;
  cursor: pointer;

  :hover {
    border: 1px solid #c3c3c3;
  }
`;

const Iput = styled.input`
  margin-top: 8px;
  border: 1px solid #f4f4f4;
  outline: none;
  height: 30px;
  border-radius: 5px;
  padding-left: 10px;

  ::placeholder {
    font-size: 12px;
  }
`;

const Cancel = styled.div`
  cursor: pointer;
  height: 25px;
  width: 25px;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 350ms;

  :hover {
    background-color: #ebeaea;
  }
`;

const ButHold2 = styled.div`
  margin-top: 10px;
`;
const ButHold3 = styled.div`
  color: red;
`;
const ButHold = styled.div`
  margin-top: 50px;
`;

const Button1 = styled.div`
  height: 45px;
  width: 200px;
  background-color: #1da1f2;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;

  cursor: pointer;
  transition: all 350ms;

  :hover {
    transform: scale(0.97);
  }
`;

const Button = styled.div`
  height: 40px;
  width: 200px;
  background-color: none;
  color: #1da1f2;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;

  cursor: pointer;
  transition: all 350ms;

  :hover {
    transform: scale(0.97);
  }
`;
const AcBox = styled.div`
  margin-top: 8px;
  border: 1px solid #f4f4f4;
  border-radius: 5px;
  min-height: 30px;
  display: flex;
  /* justify-content: center; */
  align-items: left;
  flex-direction: column;
`;
const Sec = styled.div`
  margin-left: 5px;
  font-weight: bold;
  margin-top: 3px;
`;

const Conta2 = styled.div`
  position: absolute;
  background-color: white;
  min-width: 200px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  display: flex;
  top: 0;
  padding: 10px;
  border-radius: 5px;
  left: 20px;
  flex-direction: column;

  span {
    font-size: 11px;
    font-weight: 400;
  }

  @media screen and (max-width: 768px) {
    /* top: 150px; */
  }
`;
const Conta = styled.div`
  position: absolute;
  background-color: white;
  min-width: 200px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  display: flex;
  top: 130px;
  padding: 10px;
  border-radius: 5px;
  left: 20px;
  flex-direction: column;

  span {
    font-size: 11px;
    font-weight: 400;
  }

  @media screen and (max-width: 768px) {
    top: 150px;
  }
`;

const ButtonH = styled.div`
  height: 30px;
  width: 100px;
  border-radius: 5px;
  background-color: #fff2e9;
  color: #f6c06b;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;
const Tog = styled.div`
  margin-bottom: 10px;

  span {
    font-size: 13px;
  }
`;
const But = styled.div`
  color: #1da1f2;
  font-weight: 500;
  cursor: pointer;
`;

const Cont = styled.div`
  margin-left: 10px;
  width: 95%;
`;

const Ad = styled.div`
  font-weight: bold;
`;

const Holding = styled.div`
  margin-left: 10px;
  /* align-items: center; */
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: center;
  height: 100%;
  color: white;

  span {
    font-size: 12px;
    opacity: 0.8;
  }
`;
const Div = styled.div`
  font-weight: bold;
`;
const LoaderHold = styled.div`
  height: 100%;
  background-color: red;
  width: 30%;
  border-radius: 10px;
`;
const NextRec = styled.div`
  margin-right: 10px;
`;

const MainHold2 = styled.div`
  display: flex;
  width: 100%;
  background-color: white;
  border-radius: 10px;
  justify-content: space-between;
  align-items: center;
  font-size: 15px;
  margin-top: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
  position: relative;

  h5 {
    margin: 0;
  }
`;
const MainHold = styled.div`
  display: flex;
  width: 100%;
  height: 65px;
  background-color: white;
  border-radius: 10px;
  justify-content: space-between;
  align-items: center;
  font-size: 15px;

  @media screen and (max-width: 500px) {
    font-size: 12px;
  }
`;

const Content = styled.div`
  width: 100%;
  /* margin-left: 20px; */
  display: flex;
  margin-top: 30px;
  width: 90%;
  flex-direction: column;
  /* flex-wrap: wrap; */
`;

const Container = styled.div`
  width: calc(100vw - 230px);
  min-height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
  // margin-top: 80px;
  background-color: #f7f9fc;

  overflow: hidden;
  position: absolute;
  right: 0px;
  padding-top: 80px;
  // top: 50px;

  @media screen and (max-width: 1100px) {
    width: 95%;
  }
  @media screen and (max-width: 1005px) {
    width: 100%;
  }

  @media screen and (max-width: 960px) {
    margin-top: 0;
  }

  /* background-color: #352b1e; */
`;
