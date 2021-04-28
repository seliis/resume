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