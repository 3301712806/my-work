package frontend;

public class PrintError {
    public static void printError(String error){
        System.out.println(error);
    }

    public static void printExit(){
        System.out.println("退出");
    }
    public static void printAgain(){
        System.out.println("输入出错，请重新输入");
    }
    public static void printDBNotFound(){
        System.out.println("数据库未找到该值");
    }
}
