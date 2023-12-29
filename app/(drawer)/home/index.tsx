import React, { useState } from "react";
import { useEffect } from "react";
import { Text, View, ActivityIndicator } from "react-native";
import { Header } from "@layout";
import { Button, SortButton, StudentCard } from "@components";
import { userApi } from "@api"
import COLORS from "@colors";
import { PlusIcon, Bars3Icon, Squares2X2Icon } from "react-native-heroicons/solid";
import { FlatList } from "react-native-gesture-handler";

interface IStudent {
  key: string
  age: number
  name: string
  hometown: string
}

interface DeleteUserResponseModel {
  is_successful: boolean
}

export default function Home() {

  const [students, setStudents] = useState<IStudent[]>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getStudents();
  }, []);

  const getStudents = async () => {
    try {
      const res = await userApi.listUsersUsersGet();
      if (res.status === 200) {
        setStudents(res.data)
      } else {
        console.warn("Fetch error", res);
      }
    } catch (error) {
      console.error("An error occurred during the fetch:", error);
    } finally {
      setLoading(false)
    }
  };

  const deleteStudent = async (key: string) => {
    try {
      const res = await userApi.deleteUserUsersUserKeyDelete(key);
      const data: DeleteUserResponseModel = res.data;
      if (data.is_successful) {
        //TODO May we can show information modal for users
        setStudents((prevStudents) =>
          (prevStudents ?? []).filter((student: IStudent) => student.key !== key)
        );
      }
    } catch (error) {
      console.warn(error);
    }
  };

  const renderItem = (student: IStudent) => (
    <StudentCard
      deleteAction={() => deleteStudent(student.key)}
      name={student.name}
      hometown={student.hometown}
      age={student.age}
    />
  )

  return (
    <View className="flex-1 bg-[#FAFAFA]">
      <Header headerTitle="CRUD Operations" />
      <View className="p-4 my-4">
        <Text className="font-montSemiBold text-2xl text-black">Students List</Text>
        <Text className="font-montRegular text-sm text-black">Detailed information about your students</Text>
      </View>
      <View className="flex-row px-4">
        <View className="mr-auto">
          <Button
            icon={() => <PlusIcon size={24} color="white" />}
            buttonText="Add New Student"
            onPress={() => console.log("add new student")}
          />
        </View>
        <View className="flex-row ml-4 items-center">
          <SortButton icon={() => <Bars3Icon size={24} color={COLORS.primary} />} onPress={() => console.log("Sort list")} />
          <SortButton icon={() => <Squares2X2Icon size={24} color={COLORS.lighGray} />} onPress={() => console.log("Sort list")} />
        </View>
      </View>
      <View className="flex-1 p-4 bg-white mx-4 my-4">
        {loading ? (
          <View className="flex-1 justify-center items-center">
            <ActivityIndicator size="large" color={COLORS.primary} />
          </View>) : (
          <FlatList
            data={students}
            numColumns={2}
            renderItem={({ item }) => renderItem(item)}
            keyExtractor={(item) => item.key}
          />
        )
        }
      </View>
    </View>
  );
}
