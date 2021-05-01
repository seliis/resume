import { writable } from "svelte/store"

export let menuBool = writable(false);

export let getUnitAngel = writable(
`function getUnitAngel(unit)
    local p = unit:getPoint()
    return p.y
end`
);

export let headingTo = writable(
`function headingTo(from, to)
    local dz = to.z - from.z
    local dx = to.x - from.x
    local h = math.deg(
        math.atan2(dz, dx)
    )
    if h < 0 then
        h = h + 360
    end
    return h
end`
);

export let missileTracking1 = writable(
`function Miho.Sensor:missileTracking(weapon)
    local shooter = weapon:getLauncher()
    local missile = nil
    timer.scheduleFunction(
        function(...)
            local ran, err = pcall(
                function()
                    missile = weapon:getPoint()
                end
            )
            if ran == true then
                return arg[2] + 0.001
            else
                -- missileTracking2
                return nil
            end
        end, nil, timer.getTime() + 1
    )
end`
);

export let missileTracking2 = writable(
`-- continue from missileTracking1
for gid, data in pairs(mist.DBs.humansById) do
    local unit = Unit.getByName(data.unitName)
    if unit ~= nil and unit:inAir() == true then
        if mist.utils.get3DDist(
                missile, unit:getPoint()
            ) < 100 then
            notice(unit, shooter)
            declare(gid, unit)
            break
        end
    end
end`
);

export let GetEom = writable(
`Public Function GetEom(ByVal DateVal As String) As String
    Dim Result As String
    Result = Application.WorksheetFunction.EoMonth( _
        CDate(DateVal), 0 _
    )

    'Return
    GetEom = Format(Result, "yyyy-mm-dd")
End Function`
);

export let IsDate = writable(
`Public Function IsDate(ByVal DateVal As String) As Boolean
    On Error GoTo Failed
    If CDate(DateVal) Then
        IsDate = True
        Exit Function
    End If
Failed:
    IsDate = False
End Function`
);

export let ConnDB = writable(
`Public Function ConnDB() As String
    Dim Path As String
    Path = ThisWorkbook.Path & "\\" & "main.accdb"
    
    'Return
    ConnDB = "Provider=Microsoft.Ace.OLEDB.12.0;" & _
             "Data Source='" & Path & "';" & _
             "User Id=admin;" & _
             "Password=;"
End Function

'Open Database
Private Database As New ADODB.Connection
Database.Open ConnDB()`
);

export let Upload = writable(
`Private Sub Upload()
    With DataSheet
        For iA = 2 To Lr
            SQL = "INSERT INTO [EXCHANGE_HISTORY] VALUES("
                For iB = 1 To Lc
                    If iB <> Lc Then
                        SQL = SQL & "'" & _
                        .Cells(iA, iB).Value & "',"
                    Else
                        SQL = SQL & "'" & _
                        .Cells(iA, iB).Value & "'"
                    End If
                Next iB
            SQL = SQL & ");"
            Database.Execute CommandText:=SQL
        Next iA
    End With
End Sub`
);

export let IsExtended = writable(
`Private Funtion IsExtended(Stock, Serial)
    Dim Record As New ADODB.RecordSet
    Dim Data(2) As Variant
    Dim Command As String

    Command = "SELECT Doc, Extend FROM [CPAD_EXTD]"
    Command = Command & " WHERE Stock = '" & Stock & "'"
    Command = Command & " AND Serial = '" & Serial & "'"
    Command = Command & " ORDER BY Extend DESC;"

    Record.Open Source:=Command, _
                ActiveConnection:=Database, _
                CursorType:=adOpenStatic
    
    If Record.RecordCount > 0 Then
        Data(1) = Record.Fields("Extend").Value
        Data(2) = Record.Fields("Doc").Value
        Data(1) = Format(Data(1), "yyyy-mm-dd")
    End If

    Record.Close
    IsExtended = Data
End Function`
);

export let Convert1 = writable(
`Public Function Convert(TargetPath)
    Dim Terminal As Variant
    Dim Command As String
    Dim Line As String
    Dim Main As String
    Dim Path As String

    Main = Workbooks("main.xlsm").Path
    Path = Main & "\\cell.xlsx"

    Command = Main & "\\powershell_command.ps1"
    Line = FreeFile()

    'Please Refer COM Interface Usage 2

    Application.Wait Now + TimeSerial(0, 0, 10)
    Convert = Path
End Funtion`
);

export let Convert2 = writable(
`Open Command For Output As #Line
    Print #Line, "If(Test-Path '" & Path & "') {Remove-Item -path '" & Path & "'}"
    Print #Line, "$Cell = New-Object -ComObject HCell.Application"
    Print #Line, "$File = $Cell.Workbooks.Open('" & TargetPath & "')"
    Print #Line, "$File.SaveAs('" & Path & "', 51)"
    Print #Line, "Remove-Item -path '" & Command & "'"
    Print #Line, "taskkill /f /im HCell.exe"
Close #Line

Terminal = Shell( _
    "C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" & _
    " -ExecutionPolicy ByPass" & _
    " " & Command & """", _
    vbMaximizedFocus _    
)`
);

export let endCode = writable(
`-- my awesome plan
repeat
    drink("monster")
    code(24/7, 365)
    eat("burger")
    alwaysHappy()
    sleep.well()
until alive ~= true`
);