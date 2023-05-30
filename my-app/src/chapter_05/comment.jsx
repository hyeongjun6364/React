import React from "react"

const styles ={
    wrapper:{
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius: 16,
    },
    imageContainer: {},
    image: {
        width: 50,
        height:50,
        borderRadius: 25,

    },
    contentContainer: {
        marginLeft: 8,
        display:"flex",
        flexDirection:"column",
        justifyContent: "center",
    },
    nameText:{
        color:"black",
        fontSize: 16,
        fontWeight:"bold",

    },
    commentText:{
        color:"black",
        fontSize: 16,
    },
};

function Comment(props){
    //사탕을 상자에 담는다고 가정했을 때 개별 사탕들을 포장지(wrapper)에 포장한 후 상자(container)에 넣습니다.

//프로그래밍적 관점으로 봤을 때도 일반적으로 container는 하나 이상의 요소를 포괄하는 개체를 지칭하고 wrapper는 하나의 개체만을 포함하는 것을 뜻합니다.
    return(
        <div style={styles.wrapper}>
            <div style={styles.imageContainer}>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                    style={styles.image}
                />
            </div>

            <div style={styles.contentContainer}>
                <span style={styles.nameText}>{props.name}</span>
                <span style={styles.commentText}>{props.comment}</span>
            </div>
        </div>
    );
}

export default Comment