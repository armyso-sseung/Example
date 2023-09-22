package com.example.example;

import java.util.*;

public class Example {
    public static void main(String[] args) {
        Map<String, List<String>> userInfo = new HashMap<>();

        Scanner sc = new Scanner(System.in);
        while (true) {
            System.out.print("사용자의 이름을 입력해주시기 바랍니다.\n=> ");
            userInfo = nameMap(sc.nextLine(), userInfo);

            System.out.print("프로그램을 종료하시겠습니까? (Y/N)\n=> ");
            String answer = sc.nextLine();
            if ( answer.equals("Y") || answer.equals("y") ) {
                break;
            }
        }
    }

    public static Map<String, List<String>> nameMap(String name, Map<String, List<String>> userInfo) {
        if (userInfo.get(name.substring(0, 1)) == null) {
            userInfo.put(name.substring(0, 1), new ArrayList<>());
            userInfo.get(name.substring(0, 1)).add(name);
            System.out.println("\n이름이 정상적으로 등록되었습니다.\n=> " + userInfo.get(name.substring(0, 1)));
            return userInfo;
        }

        if (userInfo.get(name.substring(0, 1)).contains(name)) {
            System.out.println("\n이미 등록된 이름입니다.");
            return userInfo;
        }

        userInfo.get(name.substring(0, 1)).add(name);
        System.out.println("\n이름이 정상적으로 등록되었습니다.\n=> " + userInfo.get(name.substring(0, 1)));
        return userInfo;
    }
}
