#!/bin/bash

# 名言列表
QUOTES=("Do not take life too seriously. You will never get out of it alive. - Elbert Hubbard"
        "Get your facts first, then you can distort them as you please. - Mark Twain"
        "I can resist everything except temptation. - Oscar Wilde"
        "Always borrow money from a pessimist. He won’t expect it back. - Oscar Wilde")

# 选择随机名言
QUOTE=${QUOTES[$RANDOM % ${#QUOTES[@]}]}

# 读取当前 README 文件内容
README=$(cat README.md)

# 使用sed替换特定标记之间的内容
UPDATED_README=$(echo "$README" | sed -e "/<!-- QUOTE-START -->/,/<!-- QUOTE-END -->/{//!d;}" -e "/<!-- QUOTE-START -->/a $QUOTE")

# 写回 README 文件
echo "$UPDATED_README" > README.md
