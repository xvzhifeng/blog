@echo off
SETLOCAL ENABLEDELAYEDEXPANSION

call add-md-metadata.exe ./src/zh
pause
cd ..

dir . /b  > name.txt

for /f "delims=" %%i in (name.txt) do (
    set a=%%i
	echo !a!
		echo ..........................enter into !a! ..........................
		dir . /a-d /b |findstr /i /v "docs .git CNAME" > .\files.txt
		rem 删除属性为非目录文件( a-d),文件名不是appsettings.json的文件
		dir . /ad /b |findstr /i /v "docs .git CNAME" > .\folders.txt
		rem 删除属性为目录文件(ad),文件名不是appsettings.json的文件
		echo ..........................exit from !a!  ..........................
		@REM cd ..
		for /f "delims=" %%j in (.\files.txt) do del /q %%j
		for /f "delims=" %%k in (.\folders.txt) do rd /q /s %%k
		del /q .\files.txt .\folders.txt
    
)
@REM pause

cd docs

call yarn docs:build
@REM pause

cd ..

echo %cd%

@REM for /f "delims=" %%p in ('dir  docs\src\.vuepress\dist /b') do copy %%p\*.*  .

xcopy .\docs\src\.vuepress\dist .\ /e /y /h /r /q

@REM pause

git add .

git commit -m "update"

git push origin master