import React from "react";
import { TouchableOpacity } from "react-native";

interface ISortButton {
    onPress: () => void
    icon: () => React.ReactNode
}

const SortButton = (props: ISortButton) => {

    const { onPress, icon } = props;

    return(
        <TouchableOpacity className="flex justify-center items-center h-12 w-12 rounded-xl p-4 bg-white" onPress={onPress}>
            {icon()}
        </TouchableOpacity>
    )
}

export default SortButton;