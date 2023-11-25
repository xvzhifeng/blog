---
title: python操作粘贴板
date: 2023-11-25 21:11:55
category: 
  - end
  - 01-python
tag: 
  - python
---
## python 操作粘贴板

### 一、win32clipboard

#### 1、安装 win32clipboard

win32clipboard 集成于 win32api 中，不需要单独安装，直接安装 pywin32 就可以了

```
pip install pywin32
```

#### 2、复制图片

```python
import win32clipboard
from PIL import Image
from io import BytesIO


def copy_image_to_clipboard(img_path: str):
    '''输入文件名，执行后，将图片复制到剪切板'''
    image = Image.open(img_path)
    output = BytesIO()
    image.save(output, 'BMP')
    data = output.getvalue()[14:]
    output.close()
    win32clipboard.OpenClipboard()
    win32clipboard.EmptyClipboard()
    win32clipboard.SetClipboardData(win32clipboard.CF_DIB, data)
    win32clipboard.CloseClipboard()
```



### 二、pyperclip (支持文本)

使用方法：

```python
import pyperclip

pyperclip.copy(123)
pyperclip.copy('添加到剪切板')
```



